import Link from 'next/link';
import Column from './Column';
import Grid from './Grid';
import Image from 'next/image';
// import Button from './Button';
// import { Label } from './FormControl/Label';
// import { signOut } from 'next-auth/react';
// import DropMenuButton from './DropMenuButton';

import '@/styles/components/header.scss';
import '@/styles/components/button.scss';
import { LogoIcon } from './icons/LogoIcon';
import Button from './Button';
// import UserImage from './UserImage';
// import ToggleDarkMode from './ToggleDarkMode';

type HeaderProps = {
  user: any;
  //   isAdmin: boolean;
};

const Header = ({ user }: HeaderProps) => {
  return (
    <header>
      <Grid spacing="l">
        <Column lg="6" md="6" sm="6" xs="12" className="logo-col">
          <h1>
            <Link href="/mypage">
              <LogoIcon />
              MyTravelPlanner
            </Link>
          </h1>
        </Column>
        <Column lg="6" md="6" sm="6" xs="12" alignItems="flex-end">
          <div className="profile-wrapper">
            <Link className="button primary" href="/travels/new">
              Create new
            </Link>
            {/* {user && (
              <DropMenuButton
                fromRight
                id="user-menu"
                label={
                  <div className="user-button">
                    <span className="user-name">{user.name}</span>
                    <UserImage url={user.image} size={50} alt={user.name} />
                  </div>
                }
              >
                {isAdmin && <Link href="/admin">Admin</Link>}
                {isAdmin && <Link href="/admin/stats">Stats</Link>}
                <ToggleDarkMode />
                <Link href="/api/auth/signout">Log out</Link>
              </DropMenuButton>
            )} */}
          </div>
        </Column>
      </Grid>
    </header>
  );
};

export default Header;
