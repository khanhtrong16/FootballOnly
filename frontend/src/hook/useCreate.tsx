import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { create } from "../api/dataProvider";

const useCreate = (resource: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (variables: any) => create(resource, variables),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [resource],
            });
        },
        onError: (error) => {
            console.error("API thêm thất bại:", error);
        },
    });
};

export default useCreate;
