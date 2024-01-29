import React from 'react';

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import {
  NewspaperIcon,
  PresentationChartBarIcon,
  UserCircleIcon,
  TrashIcon,
  FolderPlusIcon,
  PowerIcon,
  ArrowPathIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";

import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
 
const SideBarAdmin: React.FC = () => {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
  
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5" placeholder={undefined}>
      <List className="p-0" placeholder={undefined}>
            <Accordion
              open={open === 1}
              icon={<ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}  placeholder={undefined}            >
              <ListItem className="p-0" selected={open === 1}  placeholder={undefined}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"  placeholder={undefined}                >
                  <ListItemPrefix  placeholder={undefined}>
                    <NewspaperIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal"  placeholder={undefined}>
                    Consejos
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0"  placeholder={undefined}>
                  <ListItem  placeholder={undefined}>
                    <ListItemPrefix  placeholder={undefined}>
                      <FolderPlusIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Nuevo consejo
                  </ListItem>
                  <ListItem  placeholder={undefined}>
                    <ListItemPrefix  placeholder={undefined}>
                      <ArrowPathIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Actualizar consejos
                  </ListItem>
                  <ListItem  placeholder={undefined}>
                    <ListItemPrefix  placeholder={undefined}>
                      <TrashIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Eliminar consejos
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={<ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}  
                placeholder={undefined}            >
              <ListItem className="p-0" selected={open === 2}  placeholder={undefined}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3"  placeholder={undefined}                >
                  <ListItemPrefix  placeholder={undefined}>
                    <WalletIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal"  placeholder={undefined}>
                    Mangrullos
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0"  placeholder={undefined}>
                  <ListItem  placeholder={undefined}>
                    <ListItemPrefix  placeholder={undefined}>
                      <FolderPlusIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Nuevo mangrullo
                  </ListItem>
                  <ListItem  placeholder={undefined}>
                    <ListItemPrefix  placeholder={undefined}>
                      <ArrowPathIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Actualizar mangrullos
                  </ListItem>
                  <ListItem  placeholder={undefined}>
                    <ListItemPrefix  placeholder={undefined}>
                      <TrashIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Eliminar mangrullos
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={<ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`} />}  placeholder={undefined}            >
              <ListItem className="p-0" selected={open === 3}  placeholder={undefined}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="border-b-0 p-3"  placeholder={undefined}                >
                  <ListItemPrefix  placeholder={undefined}>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal"  placeholder={undefined}>
                    Actividades
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0"  placeholder={undefined}>
                  <ListItem  placeholder={undefined}>
                    <ListItemPrefix  placeholder={undefined}>
                      <FolderPlusIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Nueva actividad
                  </ListItem>
                  <ListItem  placeholder={undefined}>
                    <ListItemPrefix  placeholder={undefined}>
                      <ArrowPathIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Actualizar actividades
                  </ListItem>
                  <ListItem  placeholder={undefined}>
                    <ListItemPrefix  placeholder={undefined}>
                      <TrashIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Eliminar actividades
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem  placeholder={undefined}>
          <ListItemPrefix  placeholder={undefined}>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Perfil
        </ListItem>
        <ListItem  placeholder={undefined}>
          <ListItemPrefix  placeholder={undefined}>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}

export default SideBarAdmin;