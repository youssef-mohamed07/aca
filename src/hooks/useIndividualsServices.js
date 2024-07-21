import { useMutation } from "react-query";
import { alert_msg } from "@/public/script/public";

const mutateIndividualsServices = async (data) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/individuals-services`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return await res.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const useIndividualsServices = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ data }) => {
      mutateIndividualsServices(data);
    },
    onSuccess: () => alert_msg("تم إرسال طلبك بنجاح - سنتواصل معك قريبا"),
    onError: () => alert_msg("حدث خطأ، حاول مرة اخرى", "error"),
  });

  return { mutate, isLoading };
};
