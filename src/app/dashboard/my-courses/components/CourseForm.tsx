'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';
import dynamic from "next/dynamic";

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrashIcon, PlusIcon, ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";

// Dynamically import MarkdownEditor with SSR disabled
const MarkdownEditor = dynamic(() => import("@/components/MarkdownEditor"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

// Define Zod schema for a single lecture (similar to detail page)
const lectureSchema = z.object({
    // Add id for potential existing lectures in edit mode
    id: z.number().optional(),
    title: z.string().min(2, "Lecture title must be at least 2 characters."),
    content: z.string().min(10, "Lecture content is required."),
    videoUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
    coins: z.coerce.number().int().min(0, "Coins must be non-negative.")
});


const courseFormSchema = z.object({
    // Add id for edit mode
    id: z.number().optional(),
    title: z.string().min(2, {
        message: 'Title must be at least 2 characters.',
    }),
    description: z.string().min(10, {
        message: 'Description must be at least 10 characters.',
    }),
    durationInHours: z.coerce.number().min(0.5, {
        message: 'Duration must be at least 0.5 hours.',
    }),
    coins: z.coerce.number().int().min(0, {
        message: 'Coins must be a non-negative integer.',
    }),
    // Include studentCount for edit mode (read-only)
    studentCount: z.coerce.number().int().min(0).optional(),
    lectures: z.array(lectureSchema).optional().default([]),
});

export type CourseFormValues = z.infer<typeof courseFormSchema>;

interface CourseFormProps {
    initialData?: Partial<CourseFormValues>;
    onSubmit: (data: CourseFormValues) => void;
    isSubmitting?: boolean;
}

// Default values for the create form
const defaultValues: Partial<CourseFormValues> = {
    title: "",
    description: "",
    durationInHours: 1,
    coins: 10,
    lectures: [],
};

export function CourseForm({ initialData, onSubmit, isSubmitting = false }: CourseFormProps) {
    const isEditing = !!initialData?.id;

    const form = useForm<CourseFormValues>({
        resolver: zodResolver(courseFormSchema),
        // Use initialData if provided (edit mode), otherwise use defaults (create mode)
        defaultValues: initialData ? initialData : defaultValues,
        mode: 'onChange',
    });

    const { fields, append, remove, move } = useFieldArray({
        control: form.control,
        name: "lectures"
    });

    // Use the passed onSubmit handler
    const handleFormSubmit = (data: CourseFormValues) => {
        onSubmit(data);
    };

    return (
        <Form {...form}>
            {/* Pass external onSubmit to react-hook-form's handleSubmit */}
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8 max-w-4xl">
                {/* Course Details Section */}
                <Card>
                    <CardHeader>
                         {/* Title changes based on mode */}
                        <CardTitle>{isEditing ? "Edit Course Details" : "Course Details"}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Introduction to Web Development" {...field} />
                                    </FormControl>
                                    <FormDescription>The main title of your course.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Describe your course in detail..."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>A detailed description of what the course covers.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="durationInHours"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Duration (in hours)</FormLabel>
                                        <FormControl>
                                            <Input type="number" step="0.5" min="0.5" placeholder="e.g. 2.5" {...field} />
                                        </FormControl>
                                        <FormDescription>Estimated duration.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="coins"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Total Course Coins</FormLabel>
                                        <FormControl>
                                            <Input type="number" min="0" placeholder="e.g. 50" {...field} />
                                        </FormControl>
                                        <FormDescription>Total coins awarded.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Conditionally render Student Count only in edit mode */}
                            {isEditing && (
                                <FormItem>
                                    <FormLabel>Student Count</FormLabel>
                                    <FormControl>
                                        <Input type="number" min="0" {...form.register("studentCount")} readOnly disabled className="bg-muted"/>
                                    </FormControl>
                                    <FormDescription>Current students (read-only).</FormDescription>
                                </FormItem>
                            )}
                        </div>
                    </CardContent>
                </Card>

                 {/* Lectures Section */}
                <div>
                     <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Lectures</h2>
                         <Button
                             type="button"
                             variant="outline"
                             size="sm"
                             onClick={() => append({ title: '', content: '', videoUrl: '', coins: 0 })}
                         >
                             <PlusIcon className="mr-2 h-4 w-4" /> Add Lecture
                         </Button>
                     </div>
                     <div className="space-y-4">
                         {fields.map((field, index) => (
                             <Card key={field.id}> {/* Use field.id provided by useFieldArray */}
                                <CardHeader className="flex flex-row items-center justify-between py-3 px-4 border-b">
                                    <CardTitle className="text-lg flex-grow">Lecture {index + 1}</CardTitle>
                                    <div className="flex items-center space-x-1">
                                         {/* Move Up Button */}
                                         <Button
                                             type="button"
                                             variant="ghost"
                                             size="icon"
                                             onClick={() => move(index, index - 1)}
                                             disabled={index === 0}
                                             className="text-muted-foreground enabled:hover:text-primary disabled:opacity-50"
                                         >
                                             <ArrowUpIcon className="h-4 w-4" />
                                         </Button>
                                         {/* Move Down Button */}
                                         <Button
                                             type="button"
                                             variant="ghost"
                                             size="icon"
                                             onClick={() => move(index, index + 1)}
                                             disabled={index === fields.length - 1}
                                             className="text-muted-foreground enabled:hover:text-primary disabled:opacity-50"
                                         >
                                             <ArrowDownIcon className="h-4 w-4" />
                                         </Button>
                                        {/* Delete Button */}
                                         <Button
                                             type="button"
                                             variant="ghost"
                                             size="icon"
                                             onClick={() => remove(index)}
                                             className="text-muted-foreground hover:text-destructive"
                                         >
                                             <TrashIcon className="h-4 w-4" />
                                         </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4 space-y-4">
                                     <FormField
                                        control={form.control}
                                        name={`lectures.${index}.title`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Lecture Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g., Introduction" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                     <FormField
                                        control={form.control}
                                        name={`lectures.${index}.content`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Lecture Content (Markdown)</FormLabel>
                                                <FormControl>
                                                    <div className="rounded-md border bg-background">
                                                        <MarkdownEditor
                                                            markdown={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormDescription>Write lecture content using Markdown.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                         <FormField
                                            control={form.control}
                                            name={`lectures.${index}.videoUrl`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Video URL (Optional)</FormLabel>
                                                    <FormControl>
                                                        <Input type="url" placeholder="https://..." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                         <FormField
                                            control={form.control}
                                            name={`lectures.${index}.coins`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Coins for Lecture</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" min="0" placeholder="e.g., 5" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                     {fields.length === 0 && (
                        <p className="text-sm text-muted-foreground text-center py-4">No lectures added yet. Click "Add Lecture" to start.</p>
                    )}
                </div>

                <div className="flex justify-end">
                     {/* Button text and disabled state changes based on props */}
                     <Button type="submit" disabled={isSubmitting}>
                         {isSubmitting ? (isEditing ? 'Saving...' : 'Creating...') : (isEditing ? 'Save Changes' : 'Create Course')}
                     </Button>
                </div>
            </form>
        </Form>
    );
} 