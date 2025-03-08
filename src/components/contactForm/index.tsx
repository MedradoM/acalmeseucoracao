"use client";

import { useHookFormMask } from "use-mask-input";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
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

const ContactForm = () => {
  const { register } = useForm();
  const registerWithMask = useHookFormMask(register);

  return (
    <Dialog>
      <DialogTrigger className="px-3 py-2 text-sm rounded-lg bg-default-green text-default-black border border-default-black hover:bg-default-green/90 ">
        Entre em contato
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Fale Conosco</DialogTitle>
          <DialogDescription>
            Entre em contato para saber mais ou para deixar seu comentário sobre
            o programa.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-2 grid-cols-2 grid-rows-5 lg:pt-10 self-center">
          <div className="row-span-1 col-span-2">
            <Input
              {...register("name", { required: true })}
              type="text"
              placeholder="Nome"
              className="h-10"
            />
          </div>
          <div className=" row-span-1 col-span-1">
            <Input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="h-10"
            />
          </div>
          <div className=" row-span-1 col-span-1">
            <Input
              {...registerWithMask(
                "phone",
                ["(99) 9999-9999", "(99) 99999-9999"],
                {
                  required: true,
                  autoUnmask: true,
                }
              )}
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
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
