import { Module as JSFModule } from './core/module';
import { Component as JSFComponent } from './core/component/component';
import { Directive as JSFDirective } from 'framework/core/directives/directive';
import { Pipe as JSFPipe } from 'framework/core/pipes/pipe';
import { bootstrap } from './core/functions/bootstrap';
import { $ } from './tools/dom';
import { _ } from './tools/util';
import { router } from './core/routing/router';
import { EventEmitter } from 'framework/tools/event-emitter';

export {
    JSFModule,
    JSFComponent,
    JSFDirective,
    JSFPipe,
    EventEmitter,
    bootstrap,
    _,
    $,
    router
}
