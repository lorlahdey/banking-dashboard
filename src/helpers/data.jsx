const navLists = [
    {
        name: 'Dashboard',
        imagesrc: 'images/dashboard/sidebar/dashboard.svg',
        route:'/'
    },
    {
        name: 'Invoices',
        imagesrc: 'images/dashboard/sidebar/invoice.svg',
        route:'/invoices'
    },
    {
        name: 'Messages',
        messageCount: "5",
        imagesrc: 'images/dashboard/sidebar/messages.svg',
        route:'/messages'
    },
    {
        name: 'My Wallet',
        imagesrc: 'images/dashboard/sidebar/wallet.svg',
        route:'/wallet'
    },
    {
        name: 'Activity',
        imagesrc: 'images/dashboard/sidebar/activity.svg',
        route:'/activity'
    },
    {
        name: 'Analytics',
        imagesrc: 'images/dashboard/sidebar/analytics.svg',
        route:'/analytics'
    },
    {
        name: 'Get Help',
        imagesrc: 'images/dashboard/sidebar/get-help.svg',
        route:'/get-help'
    },
    {
        name: 'Settings',
        imagesrc: 'images/dashboard/sidebar/settings.svg',
        route:'/settings'
    },
]

const transactionTable = [
    {
        imagesrc: 'images/dashboard/table/bitcoin.png',
        description: 'Bitcoin Transaction',
        date: 'Jan 16, 2020',
        cardNumber: '*****45242',
        amount: '-$853.00',
        status: 'Success',
        status_className: 'sucess'
    },
    {
        imagesrc: 'images/dashboard/table/anitonia.png',
        description: 'Sent to anitonia',
        date: 'Jan 16, 2020',
        cardNumber: '*****87212',
        amount: '-$153.00',
        status: 'Pending',
        status_className: 'pending'
    },
    {
        imagesrc: 'images/dashboard/table/paypal.png',
        description: 'Withdraw Paypal',
        date: 'Jan 16, 2020',
        cardNumber: '*****36475',
        amount: '+$223.00',
        status: 'succcess',
        status_className: 'sucess'
    },
]

export { navLists, transactionTable }