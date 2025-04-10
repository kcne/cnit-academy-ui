// Usage instructions:
// - import the the useCustomToast function from this file
// - Define the showErrorToast and showSuccessToast functions in your component like so:
// const { showErrorToast, showSuccessToast } = useCustomToast();

// And call them whenever!
// showErrorToast(error) will display a toast with an error message
// likewise, showSuccessToast(message) will display a toast with a success message

"use client";

import { toast } from "@/hooks/use-toast";

  export function useCustomToast() {
    const showErrorToast = (error: unknown) => {
      let title = "Something went wrong";
      let description = "Please try again later.";
  
      if (error instanceof Error) {
        if (error.message.includes("network")) {
          title = "Network Error";
          description = "Unable to connect to the server. Please check your internet connection.";
        } else if (error.message.includes("auth")) {
          title = "Authentication Error";
          description = "You need to be logged in to perform this action.";
        } else if (error.message.includes("validation")) {
          title = "Validation Error";
          description = "Please check your input and try again.";
        } else if (error.message.includes("404")){
          title = "Not Found";
          description = "This account does not exist.";
        }
         else {
          description = error.message;
        }
      } else if (typeof error === "string") {
        description = error;
      }
  
      toast({
        variant: "destructive",
        title,
        description,
      });
    };
  
    const showSuccessToast = (message: string) => {
      toast({
        title: "Success!",
        description: message,
      });
    };
  
    return { showErrorToast, showSuccessToast };
  }