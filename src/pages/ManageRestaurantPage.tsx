import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import { ManageRestaurantForm } from "@/forms/manage-restaurant-form/ManageRestaurantForm"


export const ManageRestaurantPage = () => {
    const { createMyRestaurant, isLoading: isCreatedLoading } = useCreateMyRestaurant();
    const { updateMyRestaurant, isLoading: isUpdatedLoading } = useUpdateMyRestaurant();
    const{restaurant} = useGetMyRestaurant();
    const isEditing = !!restaurant;
    return <ManageRestaurantForm
    restaurant={restaurant}
     onSave={ isEditing ? updateMyRestaurant:createMyRestaurant} 
     isLoading={isCreatedLoading || isUpdatedLoading} 
     />
}