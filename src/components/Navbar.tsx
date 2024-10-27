import React, { useEffect, useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import { cn } from "../lib/utils";
import { UseSelector, useDispatch } from "react-redux";
import "../styles/navbar.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import Connect from "./connect";
import { getOwener } from "../api/actions";

export function Navbar() {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [userAddress, setUserAddress] = useState(
    localStorage.getItem("userAddress")
  );
  setTimeout(() => {
    setUserAddress(localStorage.getItem("userAddress"));
  }, 600);

  let owner;
  let isOwner;
  const getOwner = async () => {
    const response = await getOwener();
    owner = response.data.owner;
    isOwner = owner === userAddress;
    console.log(isOwner);
    // localStorage.setItem("isOwner", isOwner)
  };

  const { sdk } = useSDK();

  const disconnect = async () => {
    try {
      await sdk?.terminate();
      // console.log(userAddress);
      console.log(localStorage.getItem("userAddress"));
      localStorage.removeItem("userAddress");
    } catch (err) {
      console.warn("failed to disconnect..", err);
    }
  };

  useEffect(() => {
    if (userAddress === "undefined") {
      setUserAddress(null);
    }
    if (username && userAddress) {
      getOwner();
    }
    setUsername(localStorage.getItem("username"));
    setUserAddress(localStorage.getItem("userAddress"));
  }, [username, userAddress, localStorage]);

  return (
    <>
      <div className="flex border border-gray-600 justify-between px-5 py-2">
        <div className="nav-start">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* <NavigationMenuTrigger>Getting started</NavigationMenuTrigger> */}
                <a href="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </a>{" "}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/access-existing-security">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Access Security
                  </NavigationMenuLink>
                </a>{" "}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/create-personal-security">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Create Personal Security
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="nav-end flex gap-5">
          {username && (
            <>
              <Connect />
              <div
                className="Logout"
                onClick={() => {
                  localStorage.clear();
                  disconnect();
                }}
              >
                {/* <input type="checkbox" name="" id="" /> */}
                <a href="/">
                  <button className="btn-31">
                    <span className="text-container">
                      <span className="loginTxt">Logout</span>
                    </span>
                  </button>
                </a>
              </div>
            </>
          )}
          {!username && (
            <>
              <div className="Login">
                {/* <input type="checkbox" name="" id="" /> */}
                <a href="/login" className="loginLabel">
                  <button className="btn-31">
                    <span className="text-container">
                      <span className="loginTxt">Login</span>
                    </span>
                  </button>
                </a>
              </div>
              <div className="SignUp">
                {/* <input type="checkbox" name="" id="" /> */}
                <a href="/signup" className="loginLabel">
                  <button className="btn-31">
                    <span className="text-container">
                      <span className="loginTxt">Sign Up</span>
                    </span>
                  </button>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
