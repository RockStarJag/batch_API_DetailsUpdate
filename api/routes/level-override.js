import Err from '@openaddresses/batch-error';
import LevelOverride from '../lib/types/level-override.js';
import Auth from '../lib/auth.js';

export default async function router(schema, config) {
    /**
     * @api {get} /api/level List Override
     * @apiVersion 1.0.0
     * @apiName ListLevelOverride
     * @apiGroup LevelOverride
     * @apiPermission user
     *
     * @apiDescription
     *   List level overrides
     *
     * @apiSchema (Query) {jsonschema=../schema/req.query.ListLevelOverride.json} apiParam
     * @apiSchema {jsonschema=../schema/res.ListLevelOverride.json} apiSuccess
     */
    await schema.get('/level', {
        query: 'req.query.ListLevelOverride.json',
        res: 'res.ListLevelOverride.json'
    }, async (req, res) => {
        try {
            await Auth.is_admin(req);

            return res.json(await LevelOverride.list(config.pool, req.query));
        } catch (err) {
            return Err.respond(err, res);
        }
    });

    /**
     * @api {post} /api/level Create Override
     * @apiVersion 1.0.0
     * @apiName CreateLevelOverride
     * @apiGroup LevelOverride
     * @apiPermission user
     *
     * @apiDescription
     *   Create a new level override
     *
     * @apiSchema (Body) {jsonschema=../schema/req.body.CreateLevelOverride.json} apiParam
     * @apiSchema {jsonschema=../schema/res.LevelOverride.json} apiSuccess
     */
    await schema.post('/level', {
        body: 'req.body.CreateLevelOverride.json',
        res: 'res.LevelOverride.json'
    }, async (req, res) => {
        try {
            await Auth.is_admin(req);

            const level = await LevelOverride.generate(config.pool, req.body);

            return res.json(level.serialize());
        } catch (err) {
            return Err.respond(err, res);
        }
    });

    /**
     * @api {patch} /api/level/:levelid Patch Override
     * @apiVersion 1.0.0
     * @apiName PatchLevelOverride
     * @apiGroup LevelOverride
     * @apiPermission user
     *
     * @apiDescription
     *   Patch a level override
     *
     * @apiParam {Number} :levelid Level
     *
     * @apiSchema (Body) {jsonschema=../schema/req.body.PatchLevelOverride.json} apiParam
     * @apiSchema {jsonschema=../schema/res.LevelOverride.json} apiSuccess
     */
    await schema.patch('/level/:levelid', {
        ':levelid': 'integer',
        body: 'req.body.PatchLevelOverride.json',
        res: 'res.LevelOverride.json'
    }, async (req, res) => {
        try {
            await Auth.is_admin(req);

            await LevelOverride.commit(config.pool, req.params.levelid, req.body);

            return res.json(level.serialize());
        } catch (err) {
            return Err.respond(err, res);
        }
    });

    /**
     * @api {get} /api/level/:levelid Get Override
     * @apiVersion 1.0.0
     * @apiName GetLevelOverride
     * @apiGroup LevelOverride
     * @apiPermission user
     *
     * @apiDescription
     *   Get a level override
     *
     * @apiParam {Number} :levelid Level
     *
     * @apiSchema (Body) {jsonschema=../schema/req.body.PatchLevelOverride.json} apiParam
     * @apiSchema {jsonschema=../schema/res.LevelOverride.json} apiSuccess
     */
    await schema.get('/level/:levelid', {
        ':levelid': 'integer',
        res: 'res.LevelOverride.json'
    }, async (req, res) => {
        try {
            await Auth.is_admin(req);

            const level = await LevelOverride.from(config.pool, req.params.levelid);
            return res.json(level.serialize());
        } catch (err) {
            return Err.respond(err, res);
        }
    });

    /**
     * @api {delete} /api/level/:levelid Delete Override
     * @apiVersion 1.0.0
     * @apiName DeleteLevelOverride
     * @apiGroup LevelOverride
     * @apiPermission user
     *
     * @apiDescription
     *   Delete a level override
     *
     * @apiParam {Number} :levelid Level
     *
     * @apiSchema {jsonschema=../schema/res.Standard.json} apiSuccess
     */
    await schema.delete('/level/:levelid', {
        ':levelid': 'integer',
        res: 'res.Standard.json'
    }, async (req, res) => {
        try {
            await Auth.is_admin(req);

            await LevelOverride.delete(config.pool, req.params.levelid);

            return res.json({
                status: 200,
                message: 'Delete Level Override'
            });
        } catch (err) {
            return Err.respond(err, res);
        }
    });
}
