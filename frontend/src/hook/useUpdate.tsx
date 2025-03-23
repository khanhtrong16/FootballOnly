import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { update } from "../api/dataProvider";

const useUpdate = (resource: string, id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (variables: any) => update(resource, id, variables),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [resource, id],
            });
        },
    });
};

export default useUpdate;
