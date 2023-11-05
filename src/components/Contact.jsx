import React, { useRef } from "react";
import "../styles/Contact.css";
import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Input,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  let form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);

    emailjs
      .sendForm(
        "service_uwtxc7d",
        "template_82dncwi",
        form.current,
        "9MDZYzpuS3jGtBi9P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <Box>
        <Heading>Contact</Heading>
        <span id="emptySpan">*****</span>
        <p>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </Box>

      <Box>
        <form onSubmit={sendEmail} ref={form}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              style={{ outline: "none" }}
              name="to_name"
              type={"text"}
              placeholder="Enter Your Name"
              required
            />
            <FormLabel>Email</FormLabel>
            <Input
              outlineColor={"transparent"}
              name="from_name"
              type={"email"}
              placeholder="Enter Your Email"
              required
            />
            <FormLabel>Message</FormLabel>
            <Textarea
              rows={10}
              name="message"
              placeholder="Enter Your Message"
            />
            <Input
              style={{ backgroundColor: "#facf0f", padding: "1% 1%" }}
              id="submitForm"
              type={"submit"}
              value="SUBMIT"
              cursor={"pointer"}
            />
          </FormControl>
        </form>
      </Box>

      <Box
        display={["block", "block", "flex"]}
        mt={"5%"}
        justifyContent={"space-around"}
      >
        <Box
          bg={"white"}
          id="contact-phone"
          boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          p={"5% 8%"}
          borderRadius={"10px"}
        >
          <a href="tel:9860204367">
            <Heading color={"#facf0f"}>Mobile</Heading>
            <u>
              {" "}
              <Heading size={"md"}>+91-9860204367</Heading>
            </u>{" "}
          </a>
        </Box>

        <Box
          mt={["10px", "10px", "0"]}
          bg={"white"}
          id="contact-email"
          boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          p={"5%"}
          borderRadius={"10px"}
        >
          <a href="mailto:cprathamesh94@gmail.com">
            <Heading color={"#facf0f"}>Email</Heading>
            <u>
              {" "}
              <Heading size={"md"}>cprathamesh94@gmail.com</Heading>
            </u>
          </a>
        </Box>
      </Box>
    </div>
  );
}
