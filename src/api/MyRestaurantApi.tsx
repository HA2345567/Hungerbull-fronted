import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import { useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();
    const getMyRestaurantRequest = async (): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error("Failed to get restaurant");
        }
        return response.json();
    };
    const { data: restaurant, isLoading } = useQuery("fetchMyRestaurant", getMyRestaurantRequest);

    return { restaurant, isLoading };
};

export const useCreateMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createMyRestaurantRequest = async (restaurantFormData: FormData): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: restaurantFormData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error Response:", errorText); // Log error response
            throw new Error("Failed to create restaurant");
        }
        return response.json();
    };

    const { mutate: createMyRestaurant, isLoading, isSuccess, error } = useMutation(createMyRestaurantRequest);

    useEffect(() => {
        if (isSuccess) {
            toast.success("Restaurant created!");
        }
        if (error) {
            toast.error("Unable to create restaurant");
        }
    }, [isSuccess, error]);

    return { createMyRestaurant, isLoading };
};

export const useUpdateMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();
    const updateMyRestaurantRequest = async (restaurantFormData: FormData): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: restaurantFormData,
        });
        if (!response.ok) {
            throw new Error("Failed to update restaurant");
        }
        return response.json();
    };
    const { mutate: updateMyRestaurant, isLoading, isSuccess, error } = useMutation(updateMyRestaurantRequest);
    useEffect(() => {
        if (isSuccess) {
            toast.success("Restaurant updated!");
        }
        if (error) {
            toast.error("Unable to update restaurant");
        }
    }, [isSuccess, error]);
    return { updateMyRestaurant, isLoading };
};