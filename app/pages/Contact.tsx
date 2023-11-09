import React, { Ref, forwardRef } from "react";

const Contact = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      {...props}
      className="w-full min-h-fill content-parent relative"
      id="contact"
    >
      <h1>COntact here</h1>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
