import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deleteById } from "../api/dataProvider";

const useDelete = (resource: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deleteById(resource, id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [resource],
            });
        },
    });
};

export default useDelete;
