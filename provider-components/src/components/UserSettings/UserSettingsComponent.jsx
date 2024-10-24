import React,{useState} from 'react'
import { Avatar, Popover } from 'antd';
import CardComponent from '../Card/CardComponent';
import { getIcon } from '../../Utils/Icons/getIconFunction';

export const UserSettingsComponent = ({avatarProps, cardProps}) => {
    const [open, setOpen] = useState(false);

    const handleOnRefresh = () => {
        console.log('Generar un nuevo token')        
    };
    const logout = () => {
        console.log('Desloguearte')
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
  return (
<Popover
            padding={0}
            placement="bottom"
            trigger="click"
            style={{border:'solid'}}
            open={open}
            overlayStyle={{ padding: 0 }}
            onOpenChange={handleOpenChange}
            content={
                <>
                    <CardComponent
                        typeCard={'userSettings'}
                        userName={'Acxell Gonzalez'}
                        depto={'Corporativo MTY'}
                        handleOnRefresh={handleOnRefresh}
                        handleLogout={logout}
                        userInfo={''}
                        LoadingRefresh={false}
                        expiration_token={0}
                    />
                </>
            }
        >
            <Avatar
                props={avatarProps}
                size={avatarProps?.size}
                icon={avatarProps?.icon || getIcon('UserOutlined')}
                style={avatarProps?.style}
            />
        </Popover>
  )
}

export default UserSettingsComponent