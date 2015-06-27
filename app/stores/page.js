'use strict';

class PageStore { // extends Map.prototype { -- not working :'((

    get _data() {
        return this.__data || (this.__data = {});
    }

    getState() {
        const data = this._data;

        return Object.keys(data).reduce(function(result, key) {
            result[key] = data[key];

            return result;
        }, {});
    }

    get(key) {
        return this._data[key];
    }

    set(key, val) {
        this._data[key] = val;

        return this;
    }

    /* fixme */
    get _leagueRequest() {
        return this.__leagueRequests || (this.__leagueRequests = []);
    }

    loadLeagueTable(id) {
        const store = this;
        let request = this._leagueRequest[id];

        if ( ! request) {
            request = this._leagueRequest[id] = new Promise(function(resolve) {
                setTimeout(function() {
                    const data = [
                        {
                            user: {
                                id: 'id0',
                                name: 'super-user'
                            },
                            pts: 20
                        },
                        {
                            user: {
                                id: 'id1',
                                name: 'login123'
                            },
                            pts: 15
                        },
                        {
                            user: {
                                id: 'id2',
                                name: 'login123'
                            },
                            pts: 13
                        },
                        {
                            user: {
                                id: 'id3',
                                name: 'login123'
                            },
                            pts: 10
                        }
                    ];

                    resolve(data);
                });
            })
                .then(function(data) {
                    store._data['league-table-' + id] = data;
                    store._leagueRequest[id] = null;

                    return Promise.resolve(data);
                });
        }

        return request;
    }

    getLeagueTable(id) {
        return this._data['league-table-' + id];
    }
}

module.exports = PageStore;
