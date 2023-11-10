import { motion } from "framer-motion";
import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  Ref,
  forwardRef,
} from "react";

const Contact = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      {...props}
      className="w-full min-h-fill content-parent px-5 md:px-10 relative pt-20 md:pt-36"
      id="contact"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
          className="text-secondary text-xl xl:text-3xl mb-10 md:mb-16 text-right"
        >
          Got ideas? Let&apos;s Chat!
        </motion.h3>

        <form>
          <InputFormControl title="Name" keyV="name" />
          <div className="mt-7 sm:mt-10">
            <InputFormControl title="Email" keyV="email" type="email" />
          </div>
          <div className="mt-7 sm:mt-10">
            <TextAreaFormControl title="Message" keyV="message" />
          </div>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", delay: 0.4 }}
            className="px-10 py-3 mt-10 bg-orange rounded-md text-black"
          >
            Send
          </motion.button>
        </form>
      </div>
    </div>
  );
});

interface InputFormControlProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  keyV: string;
}

const InputFormControl = ({ title, keyV, ...rest }: InputFormControlProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", delay: 0.4 }}
      className="mb-3 sm:mb-6"
    >
      <label
        htmlFor={keyV}
        className="block font-satoshi text-sm sm:text-base font-normal mb-3"
      >
        {title}
      </label>
      <input
        name={keyV}
        id={keyV}
        required
        {...rest}
        className="bg-transparent border border-white border-opacity-10 rounded-md block w-full h-12 sm:h-16 text-slate-200 pl-4 font-satoshi font-normal"
      />
    </motion.div>
  );
};

interface TextAreFormControlProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  keyV: string;
}

const TextAreaFormControl = ({
  title,
  keyV,
  ...rest
}: TextAreFormControlProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", delay: 0.4 }}
      className="mb-3 sm:mb-6"
    >
      <label
        htmlFor={keyV}
        className="block font-satoshi text-sm sm:text-base font-normal mb-3"
      >
        {title}
      </label>
      <textarea
        name={keyV}
        id={keyV}
        required
        {...rest}
        className="bg-transparent border border-white border-opacity-10 rounded-md block w-full h-32 sm:h-40 text-slate-200 pl-4 pt-4 font-satoshi font-normal"
      />
    </motion.div>
  );
};

Contact.displayName = "Contact";

export default Contact;