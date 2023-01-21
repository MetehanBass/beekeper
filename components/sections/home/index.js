import Button from "@/components/shared/button/button";
import Input from "@/components/shared/input/input";
import Image from "next/image";
import React from "react";
import styles from "./Home.module.scss";
const HomeTab = () => {
  const [formType, setFormType] = React.useState("login");

  return (
    <div className={styles.home_container}>
      <div className={styles.home_wrapper}>
        <div className={styles.heading}>
          <div className="relative sm:h-20 sm:w-20 h-10 w-10 header-icon">
            <Image src="/assets/Bee.png" fill draggable={false} />
          </div>

          <h1>beekeeper</h1>
        </div>
        <div className={styles.description}>
          <h2>
            Buy your bee <br />
            Wait for honey
            <br />
            Collect every hour
            <br />
            Withdraw as cryptocurrency
          </h2>
        </div>
        <form className={styles.form}>
          {formType === "register" && (
            <div>
              <Input placeholder="E-mail" type="email" />
            </div>
          )}
          <div>
            <Input placeholder="Username" />
          </div>

          <div>
            <Input placeholder="Password" />
          </div>
          <div>
            <Button
              type="submit"
              text={formType === "login" ? "Login" : "Register"}
              color="bg-[#222222]"
              textColor="text-white"
            />
            <p
              onClick={() => {
                formType === "login"
                  ? setFormType("register")
                  : setFormType("login");
              }}
              className="text-center cursor-pointer mt-2 underline"
            >
              {formType === "login" ? "Register" : "Login"}
            </p>
          </div>

          <p className="text-center text-sm text-white font-semibold">
            First bee is free! <br />
            Start make honey.
          </p>
        </form>
      </div>
    </div>
  );
};

export default HomeTab;
