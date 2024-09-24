import { SingleSchemaKey, UnstableBuilder, composeBuilder } from '@fluent-form/core';
import { AlertComponentSchema, ButtonComponentSchema, HeadingComponentSchema, IconComponentSchema, TemplateSchema } from '../schemas';
import { KindOrKey } from './helper';

export function template<Key extends SingleSchemaKey>(key: Key): UnstableBuilder<TemplateSchema<Key>, KindOrKey> {
  return composeBuilder<TemplateSchema<Key>>().kind('template').key(key);
}

export function button<Key extends SingleSchemaKey>(key?: Key): UnstableBuilder<ButtonComponentSchema<Key>, KindOrKey> {
  return composeBuilder<ButtonComponentSchema<Key>>().kind('button').key(key);
}

function heading<Key extends SingleSchemaKey>(key?: Key): UnstableBuilder<HeadingComponentSchema<Key>, KindOrKey> {
  return composeBuilder<HeadingComponentSchema<Key>>().kind('heading').key(key);
}
export function heading1<Key extends SingleSchemaKey>(key?: Key): UnstableBuilder<HeadingComponentSchema<Key>, KindOrKeyOrLevel> {
  return heading(key).level(1);
}
export function heading2<Key extends SingleSchemaKey>(key?: Key): UnstableBuilder<HeadingComponentSchema<Key>, KindOrKeyOrLevel> {
  return heading(key).level(2);
}
export function heading3<Key extends SingleSchemaKey>(key?: Key): UnstableBuilder<HeadingComponentSchema<Key>, KindOrKeyOrLevel> {
  return heading(key).level(3);
}
export function heading4<Key extends SingleSchemaKey>(key?: Key): UnstableBuilder<HeadingComponentSchema<Key>, KindOrKeyOrLevel> {
  return heading(key).level(4);
}
export function heading5<Key extends SingleSchemaKey>(key?: Key): UnstableBuilder<HeadingComponentSchema<Key>, KindOrKeyOrLevel> {
  return heading(key).level(5);
}
export function heading6<Key extends SingleSchemaKey>(key?: Key): UnstableBuilder<HeadingComponentSchema<Key>, KindOrKeyOrLevel> {
  return heading(key).level(6);
}

export function alert<Key extends SingleSchemaKey>(key?: Key): UnstableBuilder<AlertComponentSchema<Key>, KindOrKey> {
  return composeBuilder<AlertComponentSchema<Key>>().kind('alert').key(key);
}

export function icon<Key extends SingleSchemaKey>(key?: Key): UnstableBuilder<IconComponentSchema<Key>, KindOrKey> {
  return composeBuilder<IconComponentSchema<Key>>().kind('icon').key(key);
}

type KindOrKeyOrLevel = KindOrKey | 'level';
