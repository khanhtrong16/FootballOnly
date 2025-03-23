import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getById } from "../api/dataProvider";

const useGetById = (resource: string, category: string, id: string) => {
    return useQuery({
        queryKey: [resource, category, id],
        queryFn: () => getById(resource, category, id),
    });
};

export default useGetById;
