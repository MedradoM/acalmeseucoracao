"use client";

import { useHookFormMask } from "use-mask-input";
import { Input } from "../ui/input";
import { useForm, UseFormRegister } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const ContactForm = () => {
  const { register } = useForm<{
    name: string;
    email: string;
    phone: string;
    description: string;
  }>();
  const registerWithMask = useHookFormMask(register);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(document.body.clientWidth);
  }, []);

  if ((width ?? 0) > 640) {
    return (
      <Dialog>
        <DialogTrigger className="px-3 py-2 text-sm rounded-lg bg-default-green text-default-black border border-default-black hover:bg-default-green/90 ">
          Entre em contato
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Fale Conosco</DialogTitle>
            <DialogDescription>
              Entre em contato para saber mais ou para deixar seu comentário
              sobre o programa.
            </DialogDescription>
          </DialogHeader>
          <FormData register={register} registerWithMask={registerWithMask} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger className="px-3 py-2 text-sm rounded-lg bg-default-green text-default-black border border-default-black hover:bg-default-green/90 ">
        Entre em contato
      </DrawerTrigger>
      <DrawerContent className="h-[55%]">
        <DrawerHeader>
          <DrawerTitle>Fale Conosco</DrawerTitle>
          <DrawerDescription>
            Entre em contato para saber mais ou para deixar seu comentário sobre
            o programa.
          </DrawerDescription>
        </DrawerHeader>
        <FormData register={register} registerWithMask={registerWithMask} />
      </DrawerContent>
    </Drawer>
  );
};

const FormData: React.FC<{
  register: UseFormRegister<{
    name: string;
    email: string;
    phone: string;
    description: string;
  }>;
  registerWithMask: ReturnType<typeof useHookFormMask>;
}> = ({ register, registerWithMask }) => {
  return (
    <form className="grid gap-2 grid-cols-2 grid-rows-6 lg:grid-rows-5 lg:pt-10 w-full px-5 lg:px-0 self-center">
      <div className="row-span-1 col-span-2">
        <Input
          {...register("name", { required: true })}
          type="text"
          placeholder="Nome"
          className="h-10"
        />
      </div>
      <div className=" row-span-1 lg:col-span-1 col-span-2">
        <Input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          className="h-10"
        />
      </div>
      <div className=" row-span-1 lg:col-span-1 col-span-2">
        <Input
          {...registerWithMask("phone", ["(99) 9999-9999", "(99) 99999-9999"], {
            required: true,
            autoUnmask: true,
          })}
          placeholder="Telefone"
          className="h-10"
        />
      </div>
      <div className="row-span-2 col-span-2">
        <Textarea
          {...register("description")}
          className="resize-none h-full"
          placeholder="Assunto"
        />
      </div>
      <div className="row-span-1 w-full h-full col-span-2">
        <Button
          type="submit"
          className="size-full border-default-black bg-default-green border text-default-black hover:bg-default-green/95"
        >
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
