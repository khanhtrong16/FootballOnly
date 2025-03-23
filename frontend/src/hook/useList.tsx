import { useQuery } from "@tanstack/react-query";
import { getList } from "../api/dataProvider";

const useList = (resource: string, limit: number, page: number) => {
    return useQuery({
        queryKey: [resource, limit, page],
        queryFn: () => getList(resource, limit, page),
    });
};

export default useList;
