import { ReactNode } from 'react';
import { Button } from 'react-bootstrap';

interface NavButtonProps {
  children: ReactNode;
  onClick: () => void
};

const NavButton = ({
  children,
  onClick
}: NavButtonProps) => {
  return (
    <Button
      className='px-4' 
      variant='light' onClick={onClick}>{children}</Button> 
  )
}

export default NavButton;
