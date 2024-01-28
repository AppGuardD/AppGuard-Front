import React from "react";

import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";

import {
  PresentationChartBarIcon,
  WalletIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ArrowPathIcon,
  FolderPlusIcon,
  NewspaperIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const SideBarAdmin: React.FC = () => {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
 
  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
 
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
 
  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer} placeholder={undefined}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}  placeholder={undefined}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"  placeholder={undefined}        >

          <List  placeholder={undefined}>
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
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Notificaciones
              <ListItemSuffix  placeholder={undefined}>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem  placeholder={undefined}>
              <ListItemPrefix  placeholder={undefined}>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Perfil
            </ListItem>
            <ListItem  placeholder={undefined}>
              <ListItemPrefix  placeholder={undefined}>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Configuración
            </ListItem>
            <ListItem  placeholder={undefined}>
              <ListItemPrefix  placeholder={undefined}>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
}

export default SideBarAdmin;