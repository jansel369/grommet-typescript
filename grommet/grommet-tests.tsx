///
import * as React from 'react';
import {
  App,
  Article,
  Box,
  Card,
  Columns,
  Accordion,
  AccordionPanel,
  Paragraph,
  Value,
  Layer,
  Menu,
  Header,
  Footer,
  Anchor,
  Split,
  Hero,
  Image,
  Heading,
  Headline,
  Notification,
  Section,
  Sidebar,
  Title,
  Button,
  Toast,
  Label,
  Markdown,
  Quote,
  Timestamp,
  Search,
  Select,
  Tabs,
  Tab,
  Tip,
  CheckBox,
  Form,
  FormFields,
  LoginForm,
  NumberInput,
  FormField,
  DateTime,
  RadioButton,
  SearchInput,
  TextInput,
  List,
  ListItem,
} from 'grommet/components';

class TestApp extends React.Component<any, any> {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() { return; }
  render() {
    return (
      <App centered inline>
        <Headline align="center">
          Grommet + TypeScript
        </Headline>
        <Markdown
          content={`
            # H1

            Paragraph [link](/).

            ## H2

            ![image](/img/carousel-1.png)
          `}
        />
        <List
          selectable={true}
          onMore={this.handleClick}
          onSelect={this.handleClick}
        >
          <ListItem justify='between'
            separator='horizontal'>
            <span>
              Alan
            </span>
            <span className='secondary'>
              happy
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Chris
            </span>
            <span className='secondary'>
              cool
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Eric
            </span>
            <span className='secondary'>
              odd
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Alan
            </span>
            <span className='secondary'>
              happy
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Chris
            </span>
            <span className='secondary'>
              cool
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Eric
            </span>
            <span className='secondary'>
              odd
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Alan
            </span>
            <span className='secondary'>
              happy
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Chris
            </span>
            <span className='secondary'>
              cool
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Eric
            </span>
            <span className='secondary'>
              odd
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Alan
            </span>
            <span className='secondary'>
              happy
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Chris
            </span>
            <span className='secondary'>
              cool
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Eric
            </span>
            <span className='secondary'>
              odd
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Alan
            </span>
            <span className='secondary'>
              happy
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Chris
            </span>
            <span className='secondary'>
              cool
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Eric
            </span>
            <span className='secondary'>
              odd
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Alan
            </span>
            <span className='secondary'>
              happy
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Chris
            </span>
            <span className='secondary'>
              cool
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Eric
            </span>
            <span className='secondary'>
              odd
            </span>
          </ListItem>
        </List>
        <Tip
          target='actions'
          onClose={this.handleClick}
        >
          Available actions
        </Tip>
        <Label>Foo</Label>
        <FormField>
          <TextInput
            id='item1'
            name='item-1'
            value='one'
            onDOMChange={this.handleClick}
            onSelect={this.handleClick}
            suggestions={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
          />
        </FormField>
        <CheckBox
          label='Sample label'
          toggle={true}
          disabled={true}
          reverse={true}
        />
        <Form onSubmit={this.handleClick}>
          <FormFields>
            <FormField>
              <DateTime
                id='id'
                name='name'
                format='H:mm:ss'
                onChange={this.handleClick}
              />
            </FormField>
            <FormField label="Foo" error={<p>foo</p>}>
              <NumberInput
                value={10}
                onChange={this.handleClick}
              />
            </FormField>
            <FormField>
              <RadioButton
                id='choice1-1'
                name='choice1-1'
                label='Choice 1'
                checked={true}
                onChange={this.handleClick}
              />
              <RadioButton
                id='choice1-2'
                name='choice1-2'
                label='Choice 2'
                checked={false}
                onChange={this.handleClick}
              />
            </FormField>
          </FormFields>
        </Form>
        <SearchInput
          placeHolder='Search'
          suggestions={[
            {
              value: "first",
              label: "FOO",
            },
            {
              value: "first",
              label: "FOO",
            }
          ]}
        />
        <LoginForm
          onSubmit={this.handleClick}
          title='Sample Title'
          secondaryText='Sample secondary text'
          forgotPassword={<Anchor href='#' label='Forgot password?' />}
        />
        <CheckBox
          label='Sample label'
          toggle={false}
          disabled={true}
          reverse={false}
        />
        <Search
          placeHolder='Search'
          inline={true}
        />
        <Search
          placeHolder='Search'
          inline={true}
          size='medium'
          suggestions={['first', 'second', 'third', 'fourth']}
        />
        <Tabs
          activeIndex={0}
          onActive={this.handleClick}
        >
          <Tab title='First Title'>
            <Paragraph>
              First contents
            </Paragraph>
            <input
              type='text'
              value=''
              onChange={this.handleClick}
            />
          </Tab>
          <Tab title='Second Title'>
            <Paragraph>
              Second contents
            </Paragraph>
            <input
              type='text'
              value=''
              onChange={this.handleClick}
            />
          </Tab>
        </Tabs>
        <Quote credit='Ricky Baker'>
          <Paragraph>
            Trees. Birds. Rivers. Sky.
          </Paragraph>
          <Paragraph>
            Running with my Uncle Hec
          </Paragraph>
          <Paragraph>
            Living forever.
          </Paragraph>
        </Quote>
        <Timestamp value='2017-01-09T02:40:24.812Z' />
        <Accordion>
          <AccordionPanel heading="First Title">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
          <AccordionPanel heading="Second Title">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
          <AccordionPanel heading="Third Title">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
        </Accordion>
        <Box direction='row'
          justify='start'
          align='center'
          wrap={true}
          pad='medium'
          margin='small'
          colorIndex='light-2'
          onClick={this.handleClick}
          onFocus={this.handleClick}
        >
          <Value value={1}
            colorIndex='accent-1' />
          <Box direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'
            onClick={this.handleClick}
            onFocus={this.handleClick}>
            <Value value={2} />
          </Box>
          <Box direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'
            onClick={this.handleClick}
            onFocus={this.handleClick}
          >
            <Value value={3} />
          </Box>
          <Box direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'
            onClick={this.handleClick}
            onFocus={this.handleClick}
          >
            <Value value={4} />
          </Box>
          <Box direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'
            onClick={this.handleClick}
            onFocus={this.handleClick}
          >
            <Value value={5} />
          </Box>
        </Box>
        <Columns>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 1
          </Box>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 2
          </Box>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 3
          </Box>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 4
          </Box>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 5
          </Box>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 6
          </Box>
        </Columns>
        <Layer onClose={this.handleClick}>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 6
          </Box>
        </Layer>
        <Split flex="left" priority="right" separator showOnResponsive="both">
          <Box colorIndex='neutral-1'
            justify='center'
            align='center'
            pad='medium'>
            Left Side
          </Box>
          <Box colorIndex='neutral-2'
            justify='center'
            align='center'
            pad='medium'>
            Right Side
          </Box>
        </Split>
        <Article>
          <Card
            thumbnail='/img/carousel-1.png'
            label='Sample Label'
            heading='Sample Heading'
            description='Sample description providing more details.'
          />
        </Article>
        <Header justify='between'>
          <Paragraph margin='none'>
            © 2016 Grommet Labs
          </Paragraph>
          <Menu direction='row'
            size='small'
            dropAlign={{ right: "right"}}>
            <Anchor href='#'>
              First
            </Anchor>
            <Anchor href='#'>
              Second
            </Anchor>
            <Anchor href='#'>
              Third
            </Anchor>
          </Menu>
        </Header>
        <Hero
          background={<Image src='/img/carousel-1.png' fit='cover' />}
          backgroundColorIndex='dark'>
          <Box direction='row'
            justify='center'
            align='center'>
            <Box basis='1/2'
              align='end'
              pad='medium' />
            <Box basis='1/2'
              align='start'
              pad='medium'>
              <Heading margin='none'>
                Sample Heading
              </Heading>
            </Box>
          </Box>
        </Hero>
        <Footer size='small'>
          <Paragraph margin='none'>
            © 2016 Grommet Labs
          </Paragraph>
          <Menu direction='row'
            size='small'
            dropAlign={{ right: "right"}}>
            <Anchor href='#'>
              First
            </Anchor>
            <Anchor href='#'>
              Second
            </Anchor>
            <Anchor href='#'>
              Third
            </Anchor>
          </Menu>
        </Footer>
        <Notification
          state='Sample state'
          message='Sample message'
          timestamp={{}}
        />
        <Notification
          state='Sample state'
          message='Sample message'
          timestamp="123456"
          percentComplete={30}
          status='ok'
        />
        <Section
          align='center'
          pad='medium'
          margin='small'
          colorIndex='light-2'
        >
          Section 1
        </Section>
        <Section
          align='center'
          pad='medium'
          margin='small'
          colorIndex='light-2'
        >
          Section 2
        </Section>
        <Section
          align='center'
          pad='medium'
          margin='small'
          colorIndex='light-2'
        >
          Section 3
        </Section>
        <Menu responsive={true}>
          <Anchor href='#'>
            First action
          </Anchor>
          <Anchor href='#'>
            Second action
          </Anchor>
          <Anchor href='#'>
            Third action
          </Anchor>
        </Menu>
        <Sidebar colorIndex='neutral-1'>
          <Header pad='medium'
            justify='between'>
            <Title>
              Title
            </Title>
          </Header>
          <Box
            flex='grow'
            justify='start'
          >
            <Menu primary={true}>
              <Anchor href='#'>
                First
              </Anchor>
              <Anchor href='#'>
                Second
              </Anchor>
              <Anchor href='#'>
                Third
              </Anchor>
            </Menu>
          </Box>
          <Footer pad='medium'>
            <Button label="foo" />
          </Footer>
        </Sidebar>
        <Toast
          status='ok'
          onClose={this.handleClick}
        >
          A short message to let the user know something.
        </Toast>
        <Select
          placeHolder='Search'
          inline={true}
          multiple={true}
          onSearch={this.handleClick}
          options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
          value={["one"]}
          onChange={this.handleClick}
        />
      </App>
    );
  }
}
