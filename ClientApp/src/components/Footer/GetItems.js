function GetItem(title) {

    if (title == 'Properties') {

        return [
            {
                id: 'a1',
                link: '/',
                title: 'Huts',
            },
            {
                id: 'a2',
                link: '/',
                title: 'Houses',
            },
            {
                id: 'a3',
                link: '/',
                title: 'Apartments',
            }
        ];
    }
    else if (title == 'Company') {

        return [
            {
                id: 'b1',
                link: '/',
                title: 'About',
            },
            {
                id: 'b2',
                link: '/contact',
                title: 'Contact Us',
            },
            {
                id: 'b3',
                link: '/',
                title: 'Privacy policy',
            },
            {
                id: 'b4',
                link: '/',
                title: 'Terms of Service',
            }
        ];
    }
}

export { GetItem };