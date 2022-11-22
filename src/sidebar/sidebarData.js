import * as Fa from 'react-icons/fa'
import * as Ai from 'react-icons/ai'
import * as Io from 'react-icons/io'
import * as Ri from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <Ai.AiFillHome />,
        iconClosed: <Ri.RiArrowDownSFill />,
        iconOpened: <Ri.RiArrowUpSFill />,
        subNav:[
            {
                title: 'Users',
                path: '/overview/users',
                icon: <Io.IoIosPaper />
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <Io.IoIosPaper />
            },
        ]
    }
]