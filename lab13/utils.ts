const getFromURL = (url: string) =>
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw response;
            }
        })

// sleeps after successful fetch, useful for testing loading screen
const getFromURLAndSleep = (url: string, sleepSeconds: number) =>
    getFromURL(url)
        .then(responseJSON => {
            return new Promise((resolve) => setTimeout(resolve, sleepSeconds * 1000))
                .then(() => {
                    if (sleepSeconds) {
                        console.log(`Fetched and slept for ${sleepSeconds} seconds :)`);
                    }

                    return responseJSON;
                })
        })

export { getFromURL, getFromURLAndSleep }