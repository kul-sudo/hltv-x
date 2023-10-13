import type { FC } from 'react'
import {
  Button,
  ButtonGroup,
  Center,
  HStack,
  IconButton,
  Input,
  useColorMode
} from '@chakra-ui/react'
import { BellIcon, InboxIcon, MoonIcon, SunIcon } from 'lucide-react'

const navbarItems = [
  'News',
  'Matches',
  'Results',
  'Events',
  'Stats',
  'Galleries',
  'Forums',
  'Betting',
  'Live',
  'Fantasy'
]

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Center position="sticky" top="0.5rem" rounded="full" zIndex="999">
      <HStack rounded="full">
        <ButtonGroup isAttached>
          {navbarItems.map((navbarItem, index) => (
            <Button
              backdropFilter="auto"
              backdropBlur="3xl"
              key={index}
              rounded="full"
              _notLast={{
                borderRightColor: 'whiteAlpha.200',
                borderRightWidth: 'thin'
              }}
            >
              {navbarItem}
            </Button>
          ))}
        </ButtonGroup>
        <HStack>
          <IconButton
            backdropFilter="auto"
            backdropBlur="3xl"
            icon={<BellIcon />}
            aria-label="Inbox"
            rounded="full"
          />
          <IconButton
            backdropFilter="auto"
            backdropBlur="3xl"
            icon={<InboxIcon />}
            aria-label="DMs"
            rounded="full"
          />
          <IconButton
            backdropFilter="auto"
            backdropBlur="3xl"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            aria-label="DMs"
            rounded="full"
            onClick={toggleColorMode}
          />
        </HStack>
        <Input
          backdropFilter="auto"
          backdropBlur="3xl"
          placeholder="Search"
          variant="filled"
          width="6rem"
          rounded="full"
          _placeholder={{ textAlign: 'center' }}
        />
      </HStack>
    </Center>
  )
}

export default Navbar
