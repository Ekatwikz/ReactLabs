export const generateKey = () => String.fromCharCode(
    ...[...Array(24)].map(_ => {
        let charCode = Math.floor(Math.random() * (10 + 26));
        return charCode + (charCode < 10 ? 48 : 97 - 10); // '0' is 48, 'a' is 97
    })
);

// epic I do say