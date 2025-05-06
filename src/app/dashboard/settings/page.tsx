"use client";

import { useForm } from "react-hook-form";
import { useUser } from "@/app/providers/userContext";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { settingsFormSchema } from "@/schemas/schema";
import { z } from "zod";

type Inputs = z.infer<typeof settingsFormSchema>;

export default function Settings() {
  const { user } = useUser();

  const form = useForm<Inputs>({
    defaultValues: {
      language: "en",
    },
    resolver: zodResolver(settingsFormSchema),
  });

  return (
    <>
      <div>
        <h1 className="text-start mb-4">Settings</h1>
      </div>

      <div className="form-container">
        <Form {...form}>
          <form className="space-y-4">
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input defaultValue={user?.firstName} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input defaultValue={user?.lastName} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormLabel>Email</FormLabel>
              <Input
                value={user?.email}
                disabled
                placeholder="Email"
                className="mt-1"
              />
            </div>

            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Languages</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="sr">Srpski</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-2">
              Save Changes
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
