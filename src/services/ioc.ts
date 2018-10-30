import { Container, inject, injectable } from 'inversify'
import {
  autoProvide,
  // makeFluentProvideDecorator,
  // makeProvideDecorator
} from 'inversify-binding-decorators'
import getDecorators from 'inversify-inject-decorators'
import { makeLoggerMiddleware } from 'inversify-logger-middleware'

const container = new Container()
const { lazyInject } = getDecorators(container)

// const provide = makeProvideDecorator(container)
// const fluentProvide = makeFluentProvideDecorator(container)

// const provideNamed = function(identifier: any, name: string) {
//   return fluentProvide(identifier).whenTargetNamed(name).done()
// }

// const provideSingleton = function(identifier: any) {
//   return fluentProvide(identifier).inSingletonScope().done()
// }

export {
  container,
  autoProvide,
  // provide,
  // provideSingleton,
  // provideNamed,
  inject,
  lazyInject,
  injectable,
}
