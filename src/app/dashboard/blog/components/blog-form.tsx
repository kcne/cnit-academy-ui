"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import MarkdownEditor from "@/components/MarkdownEditor";
import { blogFormSchema } from "@/schemas/schema";
import { useTranslation } from "react-i18next";

interface BlogFormProps {
  onSubmit: (values: z.infer<typeof blogFormSchema>) => void;
  defaultValues?: Partial<z.infer<typeof blogFormSchema>>;
  isLoading?: boolean;
}

export function BlogForm({
  onSubmit,
  defaultValues,
  isLoading,
}: BlogFormProps) {
  const form = useForm<z.infer<typeof blogFormSchema>>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      blogDescription: "",
      published: false,
      ...defaultValues,
    },
  });

  const { t } = useTranslation();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-4xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("blogNew.title")}</FormLabel>
                <FormControl>
                  <Input placeholder="Enter blog title" {...field} />
                </FormControl>
                <FormDescription>{t("blogNew.titleText")}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("blogNew.slug")}</FormLabel>
                <FormControl>
                  <Input placeholder="Enter blog slug" {...field} />
                </FormControl>
                <FormDescription>{t("blogNew.slugText")}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="blogDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("blogNew.description")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter a brief description of your blog"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>{t("blogNew.descriptionText")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("blogNew.content")}</FormLabel>
              <FormControl>
                <div className="rounded-md border">
                  <MarkdownEditor
                    markdown={field.value}
                    onChange={field.onChange}
                  />
                </div>
              </FormControl>
              <FormDescription>{t("blogNew.contentText")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="published"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  {t("blogNew.publish")}
                </FormLabel>
                <FormDescription>{t("blogNew.publishText")}</FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? `${t("blogNew.saving")}` : t("blogNew.save")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
