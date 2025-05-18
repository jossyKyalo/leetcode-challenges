/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var colorTheGrid = function(m, n) {
    const MOD = 1e9 + 7;
    const colors = [0, 1, 2];

    const validStates = [];
    const isValid = (state) => {
        for (let i = 1; i < state.length; i++) {
            if (state[i] === state[i - 1]) return false;
        }
        return true;
    };

    const generateStates = (pos, state) => {
        if (pos === m) {
            if (isValid(state)) validStates.push([...state]);
            return;
        }
        for (const color of colors) {
            state.push(color);
            generateStates(pos + 1, state);
            state.pop();
        }
    };

    generateStates(0, []);

    const stateToKey = (state) => state.join('');
    const compatible = new Map();

    for (const a of validStates) {
        const aKey = stateToKey(a);
        compatible.set(aKey, []);
        for (const b of validStates) {
            let ok = true;
            for (let i = 0; i < m; i++) {
                if (a[i] === b[i]) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                compatible.get(aKey).push(stateToKey(b));
            }
        }
    }

    let dp = new Map();
    for (const state of validStates) {
        dp.set(stateToKey(state), 1);
    }

    for (let col = 1; col < n; col++) {
        const newDp = new Map();
        for (const [currKey, currVal] of dp.entries()) {
            for (const nextKey of compatible.get(currKey)) {
                newDp.set(nextKey, (newDp.get(nextKey) || 0) + currVal);
                newDp.set(nextKey, newDp.get(nextKey) % MOD);
            }
        }
        dp = newDp;
    }

    let result = 0;
    for (const val of dp.values()) {
        result = (result + val) % MOD;
    }

    return result;
};
