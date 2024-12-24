import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi"
import { UserProfileForm } from "@/forms/user-profile-form/UserProfileForm";



 export const UserProfilePage = () =>{
  const {updateUser, isLoading: isUpdateLoading} = useUpdateMyUser();
  const {currentUser, isLoading: isGetLoading} = useGetMyUser();

  if(isGetLoading){
    return <div>Loading...</div>;
  }
  if(!currentUser){
    return <div>User not found</div>;
  }
  
 // Replace with actual user data
  return <UserProfileForm  currentUser={currentUser}  onSave={updateUser} isLoading={isUpdateLoading} />
};
