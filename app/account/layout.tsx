import { ReactNode } from 'react';

import SideNavigation from './_ui/SideNavigation';

type AccountLayoutProps = {
  children: ReactNode;
};

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className="grid h-full grid-cols-[16rem_1fr] gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
