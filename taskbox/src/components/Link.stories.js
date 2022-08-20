import React from 'react';
import Link from './Link';

export default {
    component: Link,
    title: 'Link',
};

const Template = args => {
    return (
        <div id="stack">
            <Link {...args} />
            <Link link="https://yourmom.com" title="YOUR MOM . COM" />
        </div>
    );
}

export const Default = Template.bind({});
Default.args = {
    link: 'https://www.google.com',
    title: "GO TO GOOGLE"
}
