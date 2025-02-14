import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { cuisinesList } from "@/config/restaurant-options-config";
import CuisinesCheckbox from "./CuisinesCheckbox";

export const CuisinesSection = () => {
    const { control } = useFormContext();

    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Cuisines</h2>
                <FormDescription>
                    Select the cuisines that your restaurant serves
                </FormDescription>
            </div>
            <FormField control={control} name="cuisines" render={({ field }) => (
                <FormItem>
                    <div className="grid md:grid-cols-5 gap-1">
                        {cuisinesList.map((cuisineItem, index) => (
                            <CuisinesCheckbox key={index} cuisine={cuisineItem} field={field} />
                        ))}
                    </div>
                    <FormMessage />
                </FormItem>
            )} />
        </div>
    );
};