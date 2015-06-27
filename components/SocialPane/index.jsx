'use strict';

const React = require('react');
const b = require('bem-cn')('social-pane');

class SocialPane extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            providers: {
                vk: 'https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/vkontakte-256.png',
                // vk: 'http://fs172.www.ex.ua/show/75216042/75216042.png',
                // vk: 'http://tp.zp.ua/images/template/icon_auth_vk.png',
                // vk: 'http://static.wixstatic.com/media/bfb5aa_d62ca7eba74d4931a35cb2d6b51ac680.png',
                // vk: 'http://spk4net.my1.ru/s-icon/Vk-icon.png',
                // twitter: 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-512.png',
                // twitter: 'http://blackbox.merit.unu.edu/wp-content/uploads/2014/03/twitter-icon-300x300.png',
                // twitter: 'http://www.clohound.com/wp-content/uploads/2015/02/twitter-icon.jpg',
                // twitter: 'http://witmergroup.com/wp-content/uploads/2014/07/social-inside-twitter-icon.png',
                twitter: 'http://icons.iconarchive.com/icons/danleech/simple/1024/twitter-icon.png',
                /* facebook:
                    'http://icons.iconarchive.com/icons/icontexto/social-inside/256/social-inside-facebook-icon.png' */
                /* facebook:
                    'http://static9.depositphotos.com/1144386/1086/v/950/depositphotos_10866787-Old-facebook-icon.jpg'*/
                facebook: 'http://cli.im/mh/images/preset/logo/facebook-2-small.png',
                mail: 'http://www.education.go.ke/images/mail.png',
                // main: 'http://www.moondays.in/images/emailus.png',
            },
        };
    }

    getIconsView() {
        const providers = this.state.providers;

        return Object.keys(providers).map(function(providerId) {
            const mods = {};

            mods[providerId] = true;

            return (
                <img className={ b('icon', mods) }
                     key={ providerId } src={ providers[providerId] }
                     width="36" height="36"
                />
            );
        });
    }

    render() {
        return (
            <div className={ b.mix(this.props.mix) }>
                { this.getIconsView() }
            </div>
        );
    }
}

module.exports = SocialPane;
