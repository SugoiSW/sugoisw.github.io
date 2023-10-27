'use client';
import mixpanel from 'mixpanel-browser';
import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren, useCallback } from 'react';

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

export const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      //   e.preventDefault();
      //   //remove everything before the hash
      //   const targetId = e.currentTarget.href.replace(/.*\#/, '');
      //   const elem = document.getElementById(targetId);
      //   window.scrollTo({
      //     top: elem?.getBoundingClientRect().top,
      //     behavior: 'smooth',
      //   });
      e.preventDefault();

      props.onClick?.(e);
      // get the href and remove everything before the hash (#)
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, '');
      // get the element by id and use scrollIntoView
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: 'smooth',
      });
      mixpanel.track(`Click ${(e.target as any).innerText || 'link'}`);
    },
    [props.onClick]
  );
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
