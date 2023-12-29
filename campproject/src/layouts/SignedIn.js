import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {

    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media.licdn.com/dms/image/C5603AQEeMvgl2Vvi8g/profile-displayphoto-shrink_800_800/0/1522004790332?e=2147483647&v=beta&t=Y6-CAZColDLQ5CFSiSuAtATLC9OnjW8DQYuIsev7lu8" />
                <Dropdown pointing="top left" text="Kübra">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
