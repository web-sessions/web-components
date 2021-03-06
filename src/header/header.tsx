import React, { useEffect, useState } from "react";
import { Container, P, SVGContainer, Wrapp } from './style'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { EventHandler } from 'cross-web-components'

export const Header: React.FC = () => {

  const event = EventHandler.custom('[HEADER_DRAWER]')

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleDrawer = (state: boolean) => setIsOpen(state)

  useEffect(() => {
    const listener = event.listener<{ state: boolean }>('[HEADER_DRAWER_CHANGE_STATE]', ({ state }) => setIsOpen(state))
    return () => {
      listener.unsubscribe()
    }
  }, [])

  return (
    <>
      <Container>
        <Wrapp>
          <SVGContainer>
            <svg style={{ height: 32 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323202 333334" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M50181 30055v212844h70936v40342c1097-1045 1713-1605 2301-2193 11962-11932 23955-23835 35845-35841 1698-1713 3391-2406 5800-2398 24790 81 49581 97 74371-47 1821-11 4084-952 5381-2231 15454-15243 30736-30661 46152-45943 1728-1713 2354-3421 2351-5806-59-51678-44-103356-44-155034v-3694H50182zm191912 151394h-29441V91364h29441v90085zm-80646-90079v89960h-29976V91370h29976zM80940 333064v-39857H206c-81-1669-198-2962-198-4257l-7-59760v-45701c7-39837 20-79676 43-119520 1-2169 386-4428 1063-6489C7056 39376 13162 21324 19079 3209 19847 863 20812 22 23315-2h120c98799 77 197597 66 296396 66 968-2 1937 0 3313 0v4184c0 64632-17 129265 58 193897v126c-23 2629-823 4462-2695 6326-28665 28550-57271 57158-85821 85822-1894 1902-3751 2696-6450 2678-17390-123-34782 19-52174-135-3332-30-5711 841-8083 3265-11472 11725-23114 23286-34787 34812-1109 1096-2853 2180-4313 2193-7285 72-14569 96-21854 100h-4373c-6800-4-13599-18-20398-26-343 0-685-123-1316-244z" fill="#6441a5" /></svg>
          </SVGContainer>
          <P>Following</P>
          <P>Browse</P>
        </Wrapp>
        <Wrapp justify='center'>
        </Wrapp>
        <Wrapp justify='flex-end'>
          <SVGContainer onClick={() => {
            if (!isOpen) toggleDrawer(true)
            else toggleDrawer(false)
          }} >
            {
              !isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" fill='white' /></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" fill="#6441a5" /></svg>
            }
          </SVGContainer>
        </Wrapp>
      </Container>
      <Drawer open={isOpen} onClose={() => toggleDrawer(false)} zIndex={90} direction='right'>
      </Drawer>
    </>
  )
};

