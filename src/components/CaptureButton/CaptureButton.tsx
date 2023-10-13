import { Box, Button  } from '@chakra-ui/react';

interface CaptureButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}
const CaptureButton = ({
  isDisabled,
  onClick
}: CaptureButtonProps) => {

  return (
    <Box>
      <Button
        isDisabled={isDisabled}
        onClick={onClick} 
        borderWidth={4} 
        borderColor='#333'
        rounded={10}
      >
        Capture
      </Button>
    </Box>
  )
}

export default CaptureButton
