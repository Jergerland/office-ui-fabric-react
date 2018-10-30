import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

export class CardPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Card"
        componentName="Card"
        exampleCards={
          <div>
            <ExampleCard title="Card" isOptIn={true} code={}>
              <h1>Card goes here.</h1>
            </ExampleCard>
          </div>
        }
        overview={
          <div>
            <p>The Card component...</p>
          </div>
        }
        bestPractices={<div />}
        dos={
          <div>
            <ul>
              <li>Coming soon.</li>
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li>Coming soon.</li>
            </ul>
          </div>
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}
