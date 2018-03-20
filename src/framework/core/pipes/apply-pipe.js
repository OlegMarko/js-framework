import { pipesFactory } from 'framework/core/pipes/pipes-factory';
import { _ } from 'framework';

export function applyPipe(pipeData, value) {
    let pipe = pipesFactory.getPipe(pipeData.name);

    if (_.isUndefined(pipe)) throw new Error(`Pipe with name ${pipeData.name} wasn't found`);

    if (_.isUndefined(pipeData.args)) pipeData.args = [];

    return pipe.transform(value, ...pipeData.args)
}