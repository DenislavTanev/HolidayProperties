function GetItem(title) {

    if (title === 'Properties') {

        return [
            {
                id: 'a1',
                link: '/properties/hut',
                title: 'Huts',
            },
            {
                id: 'a2',
                link: '/properties/house',
                title: 'Houses',
            },
            {
                id: 'a3',
                link: '/properties/apartment',
                title: 'Apartments',
            }
        ];
    }
    else if (title === 'Company') {

        return [
            {
                id: 'b1',
                link: '/aboutUs',
                title: 'About',
            },
            {
                id: 'b2',
                link: '/contact',
                title: 'Contact Us',
            },
            {
                id: 'b3',
                link: '/privacy',
                title: 'Privacy policy',
            },
            {
                id: 'b4',
                link: '/terms',
                title: 'Terms of Service',
            }
        ];
    }
}

export { GetItem };