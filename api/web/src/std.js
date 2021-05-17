function std() {
    window.std = async function(url, opts = {}) {
        try {
            url = new URL(url);
        } catch (err) {
            url = new URL(window.location.origin + url);
        }

        try {
            const res = await fetch(url, opts);

            let bdy = {};
            if ((res.status < 200 || res.status >= 400) && ![401].includes(res.status)) {
                try {
                    bdy = await res.json();
                } catch (err) {
                    throw new Error(`Status Code: ${res.status}`);
                }

                if (bdy.message) throw new Error(bdy.message);
                else throw new Error(`Status Code: ${res.status}`);
            }

            return await res.json();
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

export default std;
