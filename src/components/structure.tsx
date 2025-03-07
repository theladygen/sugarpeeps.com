import React from "react";
import { ContactAddress, ContactAddress2, ContactCity, ContactEmail, ContactPhone } from "../constants";
import Image from "next/image";
import NextLink from "next/link";

export function Container({ styleOverride = "", children }) {
  return (
    <div className={"container mx-auto py-14 " + styleOverride}>
      {children}
    </div>
  )
}

export function ColumnContainer({ children }) {
  return (
    <div className="flex flex-col xl:flex-row container mx-auto py-14">
      {children}
    </div>
  )
}

export function P({ children, center = false }: { children: React.ReactNode, center?: boolean }) {
  const baseClass = "mx-10 mb-8 leading-8";
  const alignment = center ? "text-center" : "text-justify";
  return (
    <p className={baseClass + " " + alignment}>{children}</p>
  )
}

export function H({ children }) {
  return (
    <h2 className="text-xl mx-10 mt-10 pb-8">{children}</h2>
  )
}

export function List({ children }) {
  return (
    <ul className="ml-4 px-10 list-disc">{children}</ul>
  )
}

export function Item({ children }) {
  return (
    <li className="mb-4 leading-8">{children}</li>
  )
}

export function Space() {
  return (
    <div className="py-4"/>
  )
}

type LinkProps = {
  children: React.ReactNode;
  url: string;
  newWindow?: boolean;
  noColor?: boolean;
}

export function Link({ children, url, newWindow = false, noColor = false }: LinkProps) {
  const className = noColor ? "hover:text-red" : "text-red hover:text-black";
  return (
    <a className={className} href={url} target={newWindow ? "_blank" : null}>{children}</a>
  )
}

export function Button({ children, onClick, href }: {
  children: React.ReactNode,
  onClick?: () => void,
  href?: string
}) {
  return (
    <div className="p-2 bg-red">
      <a className="text-white" href={href || "#"} onClick={onClick}>{children}</a>
    </div>
  )
}

export function Address() {
  const baseUrl = "https://google.com/maps/?q=";
  const addressQuery = `${ContactAddress}, ${ContactCity}`;

  return (
    <address className="not-italic">
      <a href={baseUrl + addressQuery} target="_blank" className="hover:text-red">
        <div className="font-bold">{ContactAddress}</div>
        <div>{ContactAddress2}</div>
        <div>{ContactCity}</div>
      </a>
    </address>
  )
}

export function Logo() {
  return (
    <NextLink href="/">
      <Image src="/images/pinup.png" alt="Sugar Peeps logo" width={240} height={126} priority={true}/>
    </NextLink>
  )
}

export function Email({ children, ...props }: { children?: React.ReactNode, [_key: string]: any }) {
  return (
    <Link url={`mailto:${ContactEmail}`} {...props}>
      {children ? children : ContactEmail}
    </Link>
  )
}

export function Phone() {
  return (
    <a href={`tel:${ContactPhone}`} className="hover:text-red">
      {ContactPhone}
    </a>
  )
}
