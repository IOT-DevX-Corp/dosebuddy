import { setVapidDetails } from 'web-push';

const vapidKeys = {
    publicKey: 'BG1BrLwb0evCLl-43lZzY0iK18mAjXn_7KbhxB5NgkBLg5GAnIohtJe8EXPhLFe35dADX7nRbnHXBa2W3DqygwY',
    privateKey: '-KWkZYOg81i8lmx5zqbmZQ38tehx9UKqNRguPaVRvfY'
};

setVapidDetails(
    'mailto:your-email@example.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

export default { webpush, vapidKeys };