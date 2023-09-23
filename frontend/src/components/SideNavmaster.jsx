import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    UserCircleIcon,
    PowerIcon,
    MapIcon,
    CalendarIcon,
    RectangleStackIcon,
    BanknotesIcon,
  } from "@heroicons/react/24/solid";
   
function SideNav() {
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            MASTER ADMIN
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a href="/admin/master-user">Master User</a>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <MapIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a href="/admin/master-wisata">Master Wisata</a>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <CalendarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a href="/admin/master-event">Master Event</a>
            <ListItemSuffix>
              <Chip size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <RectangleStackIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a href="/admin/master-bundle">Master bundle</a>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <BanknotesIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a href="/admin/master-transaksi">Master Transaksi</a>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a href="/">Log Out</a>
          </ListItem>
        </List>
      </Card>
    );
};

export default SideNav
