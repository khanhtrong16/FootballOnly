import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getOne } from "../api/dataProvider";

const useOne = (resource: string, id: string) => {
    return useQuery({
        queryKey: [resource, id],
        queryFn: () => getOne(resource, id),
    });
};

export default useOne;
